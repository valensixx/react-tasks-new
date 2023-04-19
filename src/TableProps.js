import React from "react";


export default function TableProps({ rows, columns }) {
    return (
        <table>
            <tr>
                {columns.map(cell => <th>{cell}</th>)}
            </tr>
            {rows.map(row => (
                <tr>
                    {row.map(cell => <td>{cell}</td>)}
                </tr>
            ))}
        </table>
    );
}
