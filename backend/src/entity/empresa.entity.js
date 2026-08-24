"use strict"
import {EntitySchema} from "typeorm";

const EmpresaSchema = new EntitySchema({
    name : "Empresa",
    tableName : "Empresas",
    columns:{
        id:{
            type:"int",
            primary:true,
            generated:true
        },
        nombre: {
            type:"varchar",
            length:255,
            nullable:false,
        },
        direccionEmpresa:{
            type:"varchar",
            length:255,
            nullable:false,
        },
        descripcionEmpresa:{
            type:"varchar",
            length:255,
            nullable:false,
        },
        rutEmpresa:{
            type:"varchar",
            length:12,
            nullable:false,
        },
        emailEmpresa:{
            type:"varchar",
            length:255,
            nullable:false,
        },
        createdAt: {
            type: "timestamp with time zone",
            default: () => "CURRENT_TIMESTAMP",
            nullable: false,
        },
        updatedAt: {
            type: "timestamp with time zone",
            default: () => "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP",
            nullable: false,
        },
    },

})

export { EmpresaSchema };