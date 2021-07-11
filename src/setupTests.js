// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

const originalConsoleWarn = console.warn;

// Override to suppress legacy lifecycle method warnings on CHOSEN components. 
console.warn = (...args) => {
    const [firstArg, secondArg] = args;

    // Here's a sample warning we want to skip (line breaks added to limit line length):

    /* ------------------------------------------------------------------------------------------------------- 
    Warning: componentWillMount has been renamed, and is not recommended for use.
    See https://reactjs.org/link/unsafe-component-lifecycles for details.
    
    * Move code with side effects to componentDidMount, and set initial state in the constructor.
    * Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode.
      In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names,
      you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.
    
    Please update the following components: AnotherLegacyComponent, LegacyComponent
    ------------------------------------------------------------------------------------------------------- */

    // Notice how the message ends with a list of components which have the legacy method. 
    // This list is provided to console.warn as a second argument which is used to fill %s placeholder
    // in the message passed as the first argument.

    // We want to suppress warnings only on chosen components instead of blindly skipping all unsafe 
    // lifecycle warnings. If warning contains component outside of the skip list, then the message 
    // should not be suppressed!
    const componentsToSkip = ['LegacyComponent', 'AnotherLegacyComponent'];

    const shouldSkip =
        typeof firstArg === 'string' && // It could also be an object!
        firstArg.includes('In React 18.x, only the UNSAFE_ name will work.') &&
        typeof secondArg === 'string' && // It could also be an object!
        secondArg.split(',').every(name => componentsToSkip.includes(name.trim()));

    !shouldSkip && originalConsoleWarn(...args);
}
