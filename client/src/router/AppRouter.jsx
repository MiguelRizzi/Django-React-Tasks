
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import { NavbarComponent } from "../components/NavbarComponent";
import { TasksPage} from "../pages/TasksPage";
import { TaskFormPage } from "../pages/TaskFormPage";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavbarComponent />
      </div>
      <Routes>
        <Route path="/" element={ <Navigate to="/tasks"/> }/>
        <Route path="/tasks" element={ <TasksPage/> }/>
        <Route path="/tasks/new" element={ <TaskFormPage/> }/>
      </Routes>
    </Router>
  )
}
