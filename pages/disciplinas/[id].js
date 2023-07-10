import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'
import { IoMdArrowRoundBack } from 'react-icons/io'

const form = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue } = useForm()
  
    useEffect(() => {
      
      if (query.id) {
        const disciplinas = JSON.parse(window.localStorage.getItem('disciplinas'))
        const curso = disciplinas[query.id]
  
        for(let atributo in curso){
          setValue(atributo, curso[atributo]) 
        }
      }
  
    }, [query.id])
  
    function salvar(dados) {
      const disciplinas = JSON.parse(window.localStorage.getItem('disciplinas')) || []
      disciplinas.splice(query.id, 1, dados)
      window.localStorage.setItem('disciplinas', JSON.stringify(disciplinas))
      push('/disciplinas')
    }

  return (
    <Pagina titulo="Disciplina">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control type="text" {...register('nome')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="curso">
          <Form.Label>Curso: </Form.Label>
          <Form.Control type="text" {...register('curso')} />
        
        </Form.Group>
        <Form.Group className="mb-3" controlId="cnpj">
          <Form.Label>CNPJ: </Form.Label>
          <Form.Control type="text" {...register('cnpj')} />
        </Form.Group>

        <div className='text-center'>
          <Button variant="success" onClick={handleSubmit(salvar)}>
            <AiOutlineCheck className='me-1' />
            Salvar
          </Button>
          <Link href={'/disciplinas'} className="ms-2 btn btn-danger">
            <IoMdArrowRoundBack className='me-1' />
            Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  )
}

export default form