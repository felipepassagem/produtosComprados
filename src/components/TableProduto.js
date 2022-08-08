import React, { Fragment } from 'react'
import { Container, Card, Table, Button, Col, Row, Form, Carousel } from "react-bootstrap";
import "../static/style.css";

function TableProduto({ produto, index }) {

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