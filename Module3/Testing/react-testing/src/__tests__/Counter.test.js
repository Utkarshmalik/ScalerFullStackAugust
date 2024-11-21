import {render,screen,fireEvent} from "@testing-library/react";
import Counter from "../Components/Counter";

describe("Counter Component" ,()=>{


//when you render your page : count value should be 0 

test("renders initial count of 0",()=>{

    render(<Counter/>);

    const counterText  = screen.getByText("Counter : 0");

    expect(counterText).toBeInTheDocument();

})


//when you click increment : count value should be 1 

test("incrmement clicked : counter value should nbe changed to 1",()=>{

    render(<Counter/>);
    const counterText  = screen.getByText("Counter : 0");
    expect(counterText).toBeInTheDocument();


    //Getting a button from the screen  
    const incrementButton = screen.getByText("Increment");

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);


    const updatedCounterText = screen.getByText("Counter : 2");
    expect(updatedCounterText).toBeInTheDocument();
})


//when you click decrement : count value should be 0

test("Decrement clicked : counter value should nbe changed to 0",()=>{

    render(<Counter/>);
    const counterText  = screen.getByText("Counter : 0");
    expect(counterText).toBeInTheDocument();


    //Getting a button from the screen  
    const decrementButton = screen.getByText("Decrement");

    fireEvent.click(decrementButton);


    const updatedCounterText = screen.getByText("Counter : 0");
    expect(updatedCounterText).toBeInTheDocument();
})


//when you click reset : count value should be 0 

test("Reset clicked : counter value should nbe changed to 0",()=>{

    render(<Counter/>);
    const counterText  = screen.getByText("Counter : 0");
    expect(counterText).toBeInTheDocument();


    //Getting a button from the screen  
    const incrementButton = screen.getByText("Increment");
    const decrementButton = screen.getByText("Decrement");
    const resetButton = screen.getByText("Reset");


    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

   var updatedCounterText = screen.getByText("Counter : 3");
   expect(updatedCounterText).toBeInTheDocument();

    fireEvent.click(decrementButton);
    updatedCounterText = screen.getByText("Counter : 2");
    expect(updatedCounterText).toBeInTheDocument();

    fireEvent.click(resetButton);

    updatedCounterText = screen.getByText("Counter : 0");
    expect(updatedCounterText).toBeInTheDocument();
})


})
