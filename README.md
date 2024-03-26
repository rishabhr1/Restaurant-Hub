# React Project

# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- As soon as we do anything, parcel builds a new build and refresh the browser automatically to display the latest build
- Caching - Faster Builds
- Image Optimization
- Minification of files
- Bundling of files
- Compressing of files
- Consistent Hashing
- Code Splitting
- Differential Bundling - making app compatible for older and different browsers
- Diagnostic
- Error Handling
- Allows us to host our app on HTTPs 
- Tree Shaking - removes unused code
- Different dev and prod bundles



Two types of Export/Import
- Default Export/Import
export default Comp_Name;
import Comp_Name from path;

- Named Export/Import
export const Comp1=data;
export const Comp2=data;
import (Comp1) from path;

# React Hooks
- Normal JS functions
- useState()
- useEffect()

# 2 types of Routing in web apps
- Client side routing
- Server side routing

# Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Create Slice (CartSlice)
- Dispatch(action)
- Read data using Selector

# Types of testing (developer)
- Unit Testing
- Integration Testing
- End to End Testing or e2e testing

# Setting up testing in our app
- Install React Testing Library
- Installed jest
- Installed Babel dependencies as mentioned in jest doc
- Configured Babel as mentioned in jest doc
- Configured parcel config file to disable default babel transpilation(in parcel docs search jest and selection the content in javascript section and create .parcelrc to copy the corresponding code of docs in it)
- Jest configuration
    - typescript - no
    - test environment - jsdom
    - coverage report -yes
    - provider - babel
    - clear mock call - yes
- run this commnad - npm install --save-dev jest-environment-jsdom
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- Install @testing-library/jest-dom