import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';


// test('renders without errors', () => {
//     render(<ContactForm />);

// });
// //the header h1 element exists. Include three asserts, if the header is in the document, 
// //if the heads is truthy, if the header has the correct test content
// test('renders the contact form header', () => {
//     render(<ContactForm />);
//     const header = screen.getByText(/Contact Form/i);
//     expect(header).toBeInTheDocument();
//     expect(header).toBeTruthy();
//     expect(header).toHaveTextContent(/Contact Form/i);
// }); 

// test('renders ONE error message if user enters less then 5 characters into firstname.', async () => {
//     render(<ContactForm />);
//     const fNameInput = screen.getByLabelText(/First Name*/i);
   
//     userEvent.type(fNameInput,'h');

//     // await waitFor(()=>{
//     //     const messages = 'Error: firstName must have at least 5 characters.';
//     //     const feedback=screen.queryByText(messages);
//     //     expect(feedback).toBeInTheDocument();
//     // });
//     const errorMessage=await screen.findAllByTestId('error');
//     expect(errorMessage).toHaveLength(1);
   

// });

// test('renders THREE error messages if user enters no values into any fields.', async () => {
//     render(<ContactForm />);

//     const submitBtn=screen.getByRole('button');
//      userEvent.click(submitBtn);

//      await waitFor(()=>{
        
//         const errorM=screen.getAllByTestId('error');
//         expect(errorM).toHaveLength(3);

//      });
   

//     });





// test('renders ONE error message if user enters a valid first name and last name but no email.', async () => {
//     render(<ContactForm />);

//     const fNameInput = screen.getByLabelText(/First Name*/i);
//     userEvent.type(fNameInput, "ccccccc");

//     const lNameInput = screen.getByLabelText(/Last Name*/i);
//     userEvent.type(lNameInput,'11');

//     const submitBtn=screen.getByRole('button');
//     userEvent.click(submitBtn);
//     await waitFor(()=>{
//         const errorM=screen.getByTestId('error');
//         expect(errorM).toBeTruthy();
//     });
//  });

// test('renders "email must be a valid email address" if an invalid email is entered', async () => {
//     render(<ContactForm />);
//     const emailInput = screen.getByLabelText(/Email*/i);
//     userEvent.type(emailInput,'1234');

//     const errorM = await screen.findByText(/Error: email must be a valid email address./i);
//     expect(errorM).toBeTruthy();

// });

// test('renders "lastName is a required field" if an last name is not entered and the submit button is clicked', async () => {
//     render(<ContactForm />);
//     const submitBtn = screen.getByRole('button');
//      userEvent.click(submitBtn);
    
//     const errorMessage = await screen.findByText(/lastName is a required field/i);
//     expect(errorMessage).toBeInTheDocument();
    

// });

// test('renders all firstName, lastName and email text when submitted. Does NOT render message if message is not submitted.', async () => {
//     render(<ContactForm />);
//     const fNameInput = screen.getByLabelText(/First Name*/i);
//     userEvent.type(fNameInput, "ccccccc");

//     const lNameInput = screen.getByLabelText(/Last Name*/i);
//     userEvent.type(lNameInput, '11');

//     const emailInput = screen.getByLabelText(/Email*/i);
//     userEvent.type(emailInput, '11111111@.d');

//     const submitBtn = screen.getByRole('button');
//     userEvent.click(submitBtn);

//     await waitFor(() => {
//         const displayName = screen.getByText("ccccccc");
//         const displayLName = screen.getByText('11');
//         const displayEmail = screen.getByText('11111111@.d');
//         const displayMessage = screen.queryByTestId('messageDisplay');
//         //do not use 'screen.getByTestId()'当为空值时，程序会出现错误
//         expect(displayName).toBeInTheDocument();
//         expect(displayLName).toBeInTheDocument();
//         expect(displayEmail).toBeInTheDocument();
//         expect(displayMessage).not.toBeInTheDocument();
//     });

// });

test('renders all fields text when all fields are submitted.', async () => {
    render(<ContactForm />);
    const fNameInput = screen.getByLabelText(/First Name*/i);
    userEvent.type(fNameInput, "ccccccc");

    const lNameInput = screen.getByLabelText(/Last Name*/i);
    userEvent.type(lNameInput, '11');

    const emailInput = screen.getByLabelText(/Email*/i);
    userEvent.type(emailInput, '11111111@.d');

    const messageInput = screen.getByLabelText(/Message/i);
    userEvent.type(messageInput, 'hhh');

    const submitBtn = screen.getByRole('button');
    userEvent.click(submitBtn);

    await waitFor(() => {
        const displayName = screen.getByText("ccccccc");
        const displayLName = screen.getByText('11');
        const displayEmail = screen.getByText('11111111@.d');
        const displayMessage = screen.getByText('hhh');
       
        expect(displayName).toBeInTheDocument();
        expect(displayLName).toBeInTheDocument();
        expect(displayEmail).toBeInTheDocument();
        expect(displayMessage).toBeInTheDocument();
    });


});
