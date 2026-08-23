"use strict";
import { handleErrorClient, handleErrorServer, handleSuccess } from "../utils/handleResponse.js";
import { getEmpresaService, getEmpresasService,} from "../services/empresa.service.js";
import { empresaQueryValidation, empresaBodyValidation } from "../validations/empresa.validation.js";

export async function getempresaA(req, res) {
  try {
    const { } = req.query;

    const { error } = empresaQueryValidation.validate({ });

    if (error) return handleErrorClient(res, 400, error.message);

    const [empresa, errorEmpresa] = await getEmpresaService({ });

    if (errorEmpresa) return handleErrorClient(res, 404, errorEmpresa);

    handleSuccess(res, 200, "Empresa encontrada", empresa);
  } catch (error) {
    handleErrorServer(res, 500, error.message);
  }
}

export async function getEmpresa(req, res) {
  try {
    const [empresas, errorEmpresas] = await getEmpresasService();

    if (errorEmpresas) return handleErrorClient(res, 404, errorUsers);

    empresas.length === 0
      ? handleSuccess(res, 204)
      : handleSuccess(res, 200, "Empresas encontradas", empresas);
  } catch (error) {
    handleErrorServer(
      res,
      500,
      error.message,
    );
  }
}
 
export async function createEmpresa(req, res) {
  try{
    const {error} = empresaBodyValidation.validate(req.body);
    if(error) return handleErrorClient(res, 400, error.message);

    const {nombre, direccionEmpresa, descripcionEmpresa, rutEMpresa, emailEMpresa} = req.body;

    const [empresa, errorEmpresa] = await createEmpresaService({
      nombre,
      direccionEmpresa,
      descripcionEmpresa,
      rutEMpresa,
      emailEMpresa,
    });

    if (errorEmpresa) return handleErrorClient(res, 400, errorEmpresa);

    handleSuccess(res, 201, "Empresa creada", empresa);

  }catch(error){ 
    handleErrorServer(res, 500, error.message);
  }
}

export async function updateEmpresa(req, res){
  try{
    const {id}=req.params;

    const {error} = empresaBodyValidation.validate(req.body);
    if(error) return handleErrorClient(res,400, error.message);
    const {nombre,direccionEmpresa,descripcionEmpresa,rutEMpresa,emailEMpresa}=req.body;

    const [empresa, errorEmpresa] = await updateEmpresaService({
      nombre,
      direccionEmpresa,
      descripcionEmpresa,
      rutEMpresa,
      emailEMpresa,
    });
    if (errorEmpresa) return handleErrorClient(res, 400, errorEmpresa);

    handleSuccess(res, 200, "Empresa actualizada", empresa);


  }catch(error){
    handleErrorServer(res, 500, error.message);

  }
}

export async function deleteEmpresa(req, res){
  try{
    const {id}= req.params;

    const [empresa, errorEmpresa]= await deleteEmpresaService(id);

    if (errorEmpresa) return handleErrorClient(res, 400, errorEmpresa);

    handleSuccess(res, 200, "empresa eliminada", empresa);

  }catch(error){
    handleErrorServer(res, 500, error.message);
  }
}