import React, { Fragment } from 'react'
import { Container, Card, Table, Button, Col, Row, Form, Carousel } from "react-bootstrap";
import "../static/style.css";

function TableProduto({ produto, index }) {

    /* var tableHeader = []
    var tableLinhas = []
    var tableColunas = []
    var plNomes = []
    var pl = produto['linhas']
    for (var x in pl){
        for(var y in pl[x]['colunas']){
            /* plNomes.push(pl[x]['colunas'][x]['nome']) */
            /* console.log(pl[x]['colunas'][y]['nome'])
        }
        
    }  */

    /* tableHeader.push(produto['tabela']['titulos'])
    tableLinhas.push(produto['tabela']['linhas'])
    tableColunas.push(produto['tabela']['linhas'][0]['colunas'][0]['celula']) */
    /* console.log(produto) */
    /* console.log(tableColunas[0][0]['colunas'][0]) */
    /* console.log(Object.entries(data)) */
   /*  console.log(produto['titulos']) */
   var tab = produto[index]['tamanhos']
   
    return (
        <Fragment>
            <Col>
                <Table borderless hover size="sm mt-3">
                    <tbody>
                        {tab.map((p, i)=> {
                            return (
                                <tr className="" align="start" key={i} >
                                    <td className="table-cel fs-5">{p['tamanho']}</td>
                                    <td className="table-cel fs-5">R$ {parseFloat(p['preco']).toLocaleString('pt-br', {minimumFractionDigits: 2})}</td>
                                </tr>
                            )
                        })} 

                    </tbody>
                </Table>
               

            </Col>



        </Fragment>
    )
}

export default TableProduto


{


    /* <Table striped bordered hover size="sm">

<tbody>
{produto.map((e)=>{
    return(

        <div>
            <tr>
  <th>#</th>
  <th>First Name</th>
  <th>Last Name</th>
  <th>Username</th>
</tr>
        <tr className="card-tr">
            <td className='p-1'>
                G
            </td>
            <td className='p-1'>
                {e}
            </td>
            <td className='p-1'>
                {e}
            </td>
        </tr>
        </div>

    )
})}


</tbody>
</Table> */}