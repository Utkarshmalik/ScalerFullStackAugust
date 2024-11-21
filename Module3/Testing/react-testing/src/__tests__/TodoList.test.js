
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../Components/Todo";


describe("TodoList Component", () => {


      test("renders the initial empty Todo List", () => {

        render(<TodoList/>);
        const heading = screen.getByText("Todo List");
        expect(heading).toBeInTheDocument();

      })

        test("Add a new Task", () => {
            
        render(<TodoList/>);
        const heading = screen.getByText("Todo List");
        expect(heading).toBeInTheDocument();

        const input = screen.getByPlaceholderText("Add a new task");
        const addButton = screen.getByText("Add");

        fireEvent.change(input, {target:{value:"Learn React"}});
        fireEvent.click(addButton);

        const task = screen.getByText("Learn React");

        expect(task).toBeInTheDocument();

      })




})