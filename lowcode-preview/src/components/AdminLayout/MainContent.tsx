import React, { ReactNode } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

interface MainContentProps {
  children: ReactNode
  pageKey: string
}

const MainContent: React.FC<MainContentProps> = ({ children, pageKey }) => {
  return (
    <main className="main-content">
      <div className="content-wrapper">
        <SwitchTransition mode="out-in">
          <CSSTransition key={pageKey} timeout={300} classNames="page-transition" unmountOnExit>
            <div className="page-container">{children}</div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </main>
  )
}

export default MainContent
