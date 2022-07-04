import React, { Fragment } from 'react'
import { Table } from 'react-bootstrap'

function Tabletwo({ data, index }) {

    return (
        <Fragment>
            <Table bordered responsive>
                <tbody>
                    <tr className='fw-normal'>
                        {data['titulos'].map((a) => {
                            /* if (a == ""){
                                a = "--"
                            } */
                            return (
                                <th className='fw-normal' key={a}>{a}</th>
                            )
                        })}
                    </tr>
                    {data['linhas'].map((x, i) => {

                        /* console.log(x['colunas'][i]['celula']['saldo']) */
                        return (
                            <tr key={i * 99}>
                                <td ><span className="text-uppercase">{x['nome'].split(';')[2][0]}</span><span className="text-lowercase">{x['nome'].split(';')[2].substring(1)}</span></td>
                                {x['colunas'].map((y) => {
                                    return (
                                        <td>{y['celula']['saldo']}</td>
                                    )
                                })}
                                {/* <td>{x['colunas'][i]['celula']['saldo']}</td> */}
                            </tr>
                        )

                    })}
                </tbody>
            </Table>
        </Fragment>
    )
}

export default Tabletwo