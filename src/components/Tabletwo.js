import React, { Fragment } from 'react'
import { Table } from 'react-bootstrap'
import ColorImg from './ColorImg'
import ColorBall from './ColorBall'

function Tabletwo({ data, index }) {
    

    return (
        <Fragment>
            <Table bordered responsive className='pt-3' >
                <tbody className='shadow-sm' /* style={{borderWidth: '1px', borderBottomWidth: '5px', borderLeftWidth: '5px'}} */>
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
                            
                            <tr className='text-start tr-bgcolor'   key={i * 99}>
                                <td className=' text-truncate' style={{maxWidth: '8rem'}}>{x['nome'].split(';')[0] ? <ColorImg imgUrl={x['nome'].split(';')[0]}/> : x['nome'].split(';')[1] ? <ColorBall cor={x['nome'].split(';')[1]}></ColorBall> : <div></div>}<span className="text-uppercase text-center">{x['nome'].split(';')[2][0]}</span><span className="text-lowercase">{x['nome'].split(';')[2].substring(1)}</span></td>
                                {x['colunas'].map((y, i) => {
                                    return (
                                        <td key={i*55} className='text-center'>{y['celula']['saldo']}</td>
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