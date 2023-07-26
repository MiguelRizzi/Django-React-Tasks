import { useEffect } from "react";
import { useForm } from 'react-hook-form';
import { createTask, deleteTask, updateTask, getTaskById } from "../services/tasks.api";
import { useNavigate, useParams } from "react-router-dom";

export function TaskFormPage() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const navigate = useNavigate();
    const params = useParams()
    
    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            await updateTask(params.id, data);
        } else {
            await createTask(data); 
        }
        navigate("/tasks");
    });

    useEffect(() => {
        if (params.id){
            async function loadTask(){
                const res = await getTaskById(params.id);
                setValue("title", res.data.title);
                setValue("description", res.data.description);
                setValue("completed", res.data.completed);
              
            }
            loadTask();
        }
    })

    return (
      <>
        <h1>Nueva Tarea</h1>
        <form onSubmit={onSubmit}>
          <label htmlFor="title">Título:</label>
          <input 
              type="text" 
              {...register("title", { required: true })}
          />
          {errors.title && <span>Este campo es obligatorio.</span>}

          <label htmlFor="description">Descripción:</label>
          <input 
              type="text" 
              {...register("description", { required: true })}
              id="description" 
          />
          {errors.description && <span>Este campo es obligatorio.</span>}

          <label htmlFor="completed">Completado:</label>
          <input 
              type="checkbox" 
              {...register("completed")} 
          />
          <input type="submit" value="Aceptar" />

          { params.id && (
              <button 
              onClick={async () => {
                    const accepted = window.confirm("¿Estás seguro que deseas eliminar esta tarea?");
                    if (accepted) {
                          await deleteTask(params.id);
                          navigate("/tasks");
                    }
                }
              }>Eliminar</button>) }
        </form>
      </>
    );
}
