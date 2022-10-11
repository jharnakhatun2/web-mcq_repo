export const blogData = [
    {
        id: 1,
        title: 'What is the purpose of react router? ',
        desc : "React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information. It has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling built right in. Make the URL your first thought, not an after-thought.By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.",
    },
    {
        id: 2,
        title: 'How does context api work?',
        desc : "The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to 'prop drilling' or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.React.createContext() is all our need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the 'store' and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.",
    },
    {
        id: 3,
        title: 'What is useRef() in react js?',
        desc : "The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.To avoid this, we can use the useRef Hook.useRef() only returns one item. It returns an Object called current. When we initialize useRef we set the initial value: useRef(0). It's like doing this: const count = {current: 0}. We can access the count by using count.current. Run this on your computer and try typing in the input to see the application render count increase. In general, we want to let React handle all DOM manipulation. But there are some instances where useRef can be used without causing issues. In React, we can add a ref attribute to an element to access it directly in the DOM. The useRef Hook can also be used to keep track of previous state values. This is because we are able to persist useRef values between renders.",
    }
]