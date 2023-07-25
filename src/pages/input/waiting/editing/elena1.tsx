import React, { useState } from 'react'
import { Header } from '~/componentsRoot/Header'
import TextAreaForAdmin from '../../../components/elenasComponents/TextAreaForAdmin'
import ButtonGroup from '../../../components/elenasComponents/ButtonGroup'
import TextEditor from '~/pages/components/elenasComponents/TextEditor'

const Admin = () => {
    const [selectedButtonContent, setSelectedButtonContent] = useState('');

    const handleButtonSelection = (content: string) => {
      setSelectedButtonContent(content);
    };
  return (
    <>
<Header />
<div className='
flex flex-row items-center justify-center '>
    <h1>CREATE         REVIEW          APPROVE</h1></div>
    <div className="p-8 bg-slate-800">
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
    <section className="p-4 px-1 bg-cyan-400 rounded-md flex items-center justify-center col-span-1">Left</section>
    <section className="p-4 bg-cyan-400 rounded-md flex items-center justify-center grid-cols-1 flex-col col-span-2">
    <TextEditor content={selectedButtonContent}/>
    <TextAreaForAdmin />
    </section>
    <section className="p-4 px-1 bg-cyan-400 rounded-md flex items-center justify-center col-span-1">Right
    <ButtonGroup onSelect={handleButtonSelection} />
    </section>
  </div>
</div>

</>
  )
}

export default Admin