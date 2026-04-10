import React, { useRef, useLayoutEffect, Children, isValidElement } from 'react'
import type { TabPaneProps } from './types'

const TabPane: React.FC<TabPaneProps> = ({
  tab,
  tabKey,
  activeTabKey,
  children,
  className,
  style,
  __designMode,
}) => {
  const isActive = activeTabKey === tabKey
  const tabPaneRef = useRef<HTMLDivElement>(null)

  const shouldShowChildren = __designMode === 'design' || isActive

  useLayoutEffect(() => {
    if (__designMode === 'design' && tabPaneRef.current) {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node instanceof Element && node.hasAttribute('_echarts_instance_')) {
              node.setAttribute('data-leaf', 'true')
            }
          })
        })
      })

      observer.observe(tabPaneRef.current, { childList: true, subtree: true })

      tabPaneRef.current.querySelectorAll('[_echarts_instance_]').forEach((el) => {
        el.setAttribute('data-leaf', 'true')
      })

      return () => observer.disconnect()
    }
  }, [__designMode])

  const handleClick = (e: React.MouseEvent) => {
    if (__designMode === 'design') {
      const target = e.target as HTMLElement
      const closestEcharts = target.closest('[_echarts_instance_]')
      if (closestEcharts) {
        closestEcharts.setAttribute('data-leaf', 'true')
      }
    }
  }

  return (
    <div
      ref={tabPaneRef}
      className={`tab-pane ${isActive ? 'tab-pane--active' : ''} ${className || ''}`}
      style={{
        ...style,
        display: shouldShowChildren ? undefined : 'none',
        minHeight: __designMode === 'design' && !children ? '200px' : undefined,
        pointerEvents: __designMode === 'design' ? 'auto' : undefined,
      }}
      data-tab-key={tabKey}
      data-active={isActive ? 'true' : 'false'}
      {...(__designMode === 'design' ? {
        'data-container': true,
        onClick: handleClick,
      } : {})}
    >
      {children}
      {__designMode === 'design' && !children && (
        <div style={{
          padding: '40px 20px',
          textAlign: 'center',
          color: '#999',
          border: '1px dashed #ddd',
          borderRadius: '4px',
        }}>
          拖拽组件到此处
        </div>
      )}
    </div>
  )
}

export default TabPane