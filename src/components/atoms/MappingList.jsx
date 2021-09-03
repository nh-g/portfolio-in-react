
export default function MappingList({Component, getData}) {
    console.log("getData", getData)
    const List = getData.map((item) => <Component key={item.id} item={item} />);
    console.log("List", List)
  return (
    <div className="list">
        {List}
    </div>
)
}
