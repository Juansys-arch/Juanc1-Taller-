"use strict"

import { AppDataSource } from "../config/configDb.js";
import {EmpresaSchema} from "../entity/empresa.entity.js";

export async function getEmpresaService(query) {
    try{
        const empresaRepository = AppDataSource.getRepository(EmpresaSchema);
        const empresa = await empresaRepository.findOneBy({ query });

        if (!empresa) return [null, "empresa no encontrada"];
        return [empresa, null];
    }catch (error){
        return [null, error.message];
    }
}

export async function getEmpresasService() {
    try{
        const empresaRepository = AppDataSource.getRepository(EmpresaSchema);
        const empresas = await empresaRepository.find();
        return [empresas, null];
    } catch (error){
        return [null,  error.message];
    }
}

export async function createEmpresaService(data){
    try{
        const empresaRepository = AppDataSource.getRepository(EmpresaSchema);
        const empresa = await empresaRepository.save(data);

        return [empresa, null];

    }catch (error){
        return [null, error.message];
    }
}

export async function updateEmpresaService(id, data){
    try{
        const empresaRepository = AppDataSource.getRepository(EmpresaSchema);
        const empresa = await empresaRepository.findOneBy({id})

        if(!empresa) return [null, "empresa no encontrada"];

        await empresaRepository.update({id}, data);
        return[{...empresa , ...data}, null]
    }catch(error){
        return [null, error.message];
    }
}

export async function deleteEmpresaService(id){
    try{
        const empresaRepository = AppDataSource.getRepository(EmpresaSchema);
        const empresa = await empresaRepository.findOneBy({id})

        if (!empresa) return [null, "empresa no encontrada"]

        await empresaRepository.delete({id});
        return [empresa, null];
    }catch(error ){
        return [null , error.message]
    }
}