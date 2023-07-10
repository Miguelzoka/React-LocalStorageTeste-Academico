import Pagina from '@/components/Pagina'
import disciplinaValidator from '@/validators/disciplinaValidator'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { mask } from 'remask'


const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  
    function salvar(dados) {
      const disciplinas = JSON.parse(window.localStorage.getItem('disciplinas')) || []
      disciplinas.push(dados)
      window.localStorage.setItem('disciplinas', JSON.stringify(disciplinas))
      push('/disciplinas')
    }

  function handleChange(event) {
    const name = event.target.name;
    const valor = event.target.value;
    const mascara = event.target.getAttribute("mask");
    setValue(name, mask(valor, mascara));
  }

  return (
    <Pagina titulo="Disciplinas">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control type="text" placeholder='Insira o nome da disciplina...'{...register('nome', disciplinaValidator.nome)} />
          {errors.nome && <small>{errors.nome.message}</small>}
        </Form.Group>


        <Form.Group className="mb-3" controlId="curso">
          <Form.Label>Curso: </Form.Label>
          <Form.Control type="text" placeholder='Insira o nome do curso...'{...register('curso')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="curso">
          <Form.Label>CNPJ: </Form.Label>
          <Form.Control mask="99.999.999/0001-99" type="text" placeholder='Insira o cnpj...'{...register('cnpj', disciplinaValidator.cnpj)}
          onChange={handleChange}
           />
           {errors.cnpj && <small>{errors.cnpj.message}</small>}
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