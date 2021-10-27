const Input = () => {
  const style = {
    display: 'inline-block',
    margin: '5px 0',
    padding: '6px 8px',
    width: '80%',
    height: 50,
    fontSize: 14,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    border: '1px solid #39A388',
    // boxSizing: 'border-box',
  }
  return <input type="search" placeholder="Search" style={style}></input>
}

export default Input
