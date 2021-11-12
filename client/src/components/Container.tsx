import React from 'react'
import Header from './Header'


interface Props {
  title: string
  children: React.ReactNode
}
const Container: React.FC<Props> = ({ title, children }) => {
  return (
    <React.Fragment>
      <Header title={title} />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </React.Fragment>
  );
};

export default Container
