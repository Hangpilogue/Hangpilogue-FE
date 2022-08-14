const MyPageTableRow = ({...data}) => {
  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.title}</td>
      <td>{data.nickname}</td>
      <td>{data.date}</td>
    </tr>
  )
}

export default MyPageTableRow