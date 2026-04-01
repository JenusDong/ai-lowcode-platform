import React, { Component } from 'react';

function getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

function setNestedValue(obj: any, path: string, value: any): void {
  const parts = path.split('.');
  let current = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i];
    if (current[part] === undefined || current[part] === null) {
      current[part] = {};
    }
    current = current[part];
  }
  const lastKey = parts[parts.length - 1];
  if (value === undefined || value === null || value === '') {
    delete current[lastKey];
  } else {
    current[lastKey] = value;
  }
}

function deepEqual(a: any, b: any): boolean {
  if (a === b) return true;
  if (typeof a !== typeof b) return false;
  if (typeof a !== 'object' || a === null || b === null) return false;
  
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  
  return keysA.every(key => deepEqual(a[key], b[key]));
}

interface JSONPathSetterProps {
  value?: any;
  onChange: (value: any) => void;
  field?: any;
  jsonPath: string;
  setterType: string;
  placeholder?: string;
  options?: Array<{ label: string; value: any }>;
  defaultValue?: any;
}

interface JSONPathSetterState {
  inputValue: any;
  initialized: boolean;
  lastOptionJson: string | undefined;
}

class JSONPathSetter extends Component<JSONPathSetterProps, JSONPathSetterState> {

  constructor(props: JSONPathSetterProps) {
    super(props);
    this.state = {
      inputValue: undefined,
      initialized: false,
      lastOptionJson: undefined,
    };
  }

  getOptionJson = (): string | undefined => {
    const { field } = this.props;
    if (field && typeof field.node === 'object') {
      try {
        return field.node.props?.optionJson;
      } catch (e) {
        console.error('[JSONPathSetter] Failed to get optionJson from node:', e);
      }
    }
    if (field && typeof field.getPropValue === 'function') {
      return field.getPropValue('optionJson');
    }
    return undefined;
  };

  getValueFromOptionJson = (optionJson: string | undefined): any => {
    const { jsonPath } = this.props;
    if (!optionJson) {
      return undefined;
    }
    try {
      const option = JSON.parse(optionJson);
      return getNestedValue(option, jsonPath);
    } catch {
      return undefined;
    }
  };

  updateOptionJson = (newValue: any) => {
    const { jsonPath } = this.props;
    const optionJson = this.getOptionJson();
    
    try {
      const baseOption = optionJson ? JSON.parse(optionJson) : {};
      const currentValue = getNestedValue(baseOption, jsonPath);
      
      if (deepEqual(currentValue, newValue)) {
        return;
      }
      
      setNestedValue(baseOption, jsonPath, newValue);
      const newOptionJson = JSON.stringify(baseOption, null, 2);
      
      this.setState({ lastOptionJson: newOptionJson });
      
      const { field, onChange } = this.props;
      if (field && typeof field.node === 'object' && field.node.setPropValue) {
        field.node.setPropValue('optionJson', newOptionJson);
      } else if (field && typeof field.setPropValue === 'function') {
        field.setPropValue('optionJson', newOptionJson);
      } else {
        onChange(newOptionJson);
      }
    } catch (e) {
      console.error('[JSONPathSetter] Failed to update optionJson:', e);
    }
  };

  handleChange = (newValue: any) => {
    this.setState({ inputValue: newValue });
    this.updateOptionJson(newValue);
  };

  componentDidMount() {
    const { defaultValue } = this.props;
    const optionJson = this.getOptionJson();
    const currentValue = this.getValueFromOptionJson(optionJson);
    const initialValue = currentValue !== undefined ? currentValue : defaultValue;
    
    this.setState({
      inputValue: initialValue,
      initialized: true,
      lastOptionJson: optionJson
    });
  }

  componentDidUpdate(prevProps: JSONPathSetterProps) {
    const { defaultValue } = this.props;
    const optionJson = this.getOptionJson();
    const { lastOptionJson } = this.state;
    
    if (optionJson !== lastOptionJson) {
      const currentValue = this.getValueFromOptionJson(optionJson);
      const newInputValue = currentValue !== undefined ? currentValue : defaultValue;
      
      this.setState({
        inputValue: newInputValue,
        lastOptionJson: optionJson
      });
    }
  }

  render() {
    const { setterType, placeholder, options } = this.props;
    const { inputValue, initialized } = this.state;

    if (!initialized) {
      return null;
    }

    switch (setterType) {
      case 'BoolSetter':
        return (
          <input
            type="checkbox"
            checked={inputValue === true}
            onChange={(e) => this.handleChange(e.target.checked)}
          />
        );
      case 'NumberSetter':
        return (
          <input
            type="number"
            value={inputValue ?? ''}
            placeholder={placeholder}
            onChange={(e) => this.handleChange(e.target.value ? Number(e.target.value) : undefined)}
          />
        );
      case 'SelectSetter':
        return (
          <select
            value={inputValue ?? ''}
            onChange={(e) => this.handleChange(e.target.value)}
            style={{ width: '100%' }}
          >
            <option value="">请选择</option>
            {options?.map((opt, idx) => (
              <option key={idx} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        );
      default:
        return (
          <input
            type="text"
            value={inputValue ?? ''}
            placeholder={placeholder}
            onChange={(e) => this.handleChange(e.target.value || undefined)}
            style={{ width: '100%' }}
          />
        );
    }
  }
}

export default JSONPathSetter;
