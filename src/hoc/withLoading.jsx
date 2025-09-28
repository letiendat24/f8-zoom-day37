function withLoading(Component) {
    const WrapperComponent = ({ isLoading }) => {
       return isLoading ? (<div>Loading...</div>) : <Component />
    }
    return WrapperComponent;
}
export default withLoading;