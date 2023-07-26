import { useForm } from 'react-hook-form';
import { createTask } from "../services/tasks.api";
import { useNavigate } from "react-router-dom";

export function TaskFormPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();
    const onSubmit = handleSubmit(async data => {
        await createTask(data);
        navigate("/tasks");
    });

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
        </form>
      </>
    );
}
