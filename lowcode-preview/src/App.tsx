import { useState, useEffect } from 'react'
import ReactRenderer from '@alilc/lowcode-react-renderer'
import { buildComponents } from '@alilc/lowcode-utils'
import { customComponents, componentMeta } from './registerComponents'
import './App.css'

const sampleSchema = {
  componentName: 'Page',
  props: {
    ref: 'outerView',
    style: {
      height: '100%',
      padding: '20px',
    },
  },
  children: [
    {
      componentName: 'ProductList',
      id: 'productList1',
      props: {
        showFilter: true,
        showStatistics: true,
        showBatchOperations: true,
      },
    },
  ],
}

const getProjectSchema = () => {
  try {
    const localSchema = localStorage.getItem('general:projectSchema')
    if (localSchema) {
      return JSON.parse(localSchema)
    }
  } catch (e) {
    console.warn('Failed to load schema from localStorage:', e)
  }
  return {
    componentsTree: [sampleSchema],
    componentsMap: Object.values(componentMeta),
    version: '1.0.0',
    i18n: {},
  }
}

function App() {
  const [data, setData] = useState<any>({})

  useEffect(() => {
    const init = async () => {
      try {
        const schema = getProjectSchema()
        const pageSchema = schema.componentsTree?.[0] || sampleSchema
        const componentsMap = schema.componentsMap || Object.values(componentMeta)

        const components = buildComponents(
          componentsMap,
          customComponents,
          undefined
        )
        setData({
          schema: pageSchema,
          components,
        })
      } catch (error) {
        console.error('Failed to initialize renderer:', error)
      }
    }

    init()
  }, [])

  const { schema, components } = data

  if (!schema || !components) {
    return (
      <div style={{ padding: 20, textAlign: 'center' }}>
        <h2>加载中...</h2>
        <p>正在初始化低代码渲染器</p>
      </div>
    )
  }

  return (
    <div className="lowcode-preview-app">
      <ReactRenderer
        schema={schema}
        components={components}
        appHelper={{
          utils: {
            message: {
              success: (msg: string) => console.log('Success:', msg),
              error: (msg: string) => console.error('Error:', msg),
            },
          },
        }}
      />
    </div>
  )
}

export default App
