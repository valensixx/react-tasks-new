import React, { useState } from "react";
import TableProps from "./TableProps";
import "./TableProps.css";
/*
Create Table component - it takes data as props  - header of col (array of strings) and
data in cells as array of arrays.
Create design with example data:

const columns = ['Id', 'Name', 'Age'];
const rows = [
    [1, 'Gosho' ,30],
    [2, 'Pesho' ,20],
    [3, 'Tosho' ,40],
];
*/

export default function Table() {
    const columns = ["Id", "Name", "Age"];
    const rows = [
        [1, 'Gosho', 30],
        [2, 'Pesho', 20],
        [3, 'Tosho', 40],
    ];

    return (
        <div>
            <TableProps rows={rows} columns={columns}/>
        </div>
    );
}