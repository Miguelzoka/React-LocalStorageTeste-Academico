import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { AiOutlineDelete } from 'react-icons/ai'
import { BsFillPencilFill } from 'react-icons/bs'

const index = () => {

    const [disciplinas, setDisciplinas] = useState([])
  
    useEffect(() => {
      setDisciplinas(getAll())
    }, [])
  
    function getAll() {
      return JSON.parse(window.localStorage.getItem('disciplinas')) || []
    }
  
    function excluir(id) {
      if (confirm('Deseja realmente excluir o registro?')) {
        const disciplinas = getAll()
        disciplinas.splice(id, 1)
        window.localStorage.setItem('disciplinas', JSON.stringify(disciplinas))
        setDisciplinas(disciplinas)
      }
    }

  return (
    <Pagina titulo="Disciplinas">

      <Link href={'/disciplinas/form'} className="btn btn-primary mb-2" >Novo</Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Curso</th>
            <th>CNPJ</th>
          </tr>
        </thead>
        <tbody>
          {disciplinas.map((item) => (
            <tr key={item.id}>
              <td>
                <Link href={'/disciplinas/' + item.id}>
                  <BsFillPencilFill className='me-2 text-primary' />
                </Link>
                <AiOutlineDelete onClick={() => excluir(item.id)} className='text-danger' />
              </td>
              <td>{item.nome}</td>
              <td>{item.curso}</td>
              <td>{item.cnpj}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  )
}

export default index
