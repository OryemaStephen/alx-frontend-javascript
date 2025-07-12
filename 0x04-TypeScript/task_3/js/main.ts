/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
  firstName: "Stephen",
  lastName: "Oryema"
};

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = {
  firstName: "Stephen",
  lastName: "Oryema",
  age: 27
};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);