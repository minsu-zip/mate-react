const Input = () => {
  const style = {
    display: 'inline-block',
    padding: '6px 8px',
    width: '80%',
    height: 80,
    fontSize: 14,
    borderRadius: 4,
    border: '2px solid #333',
    backgroundColor: 'pink',
    boxSizing: 'border-box',
  }
  return <input type="search" placeholder="Search" style={style}></input>
}

export default Input
