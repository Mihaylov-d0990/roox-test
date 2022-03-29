import React from 'react'

function App() {
    const [users, setUsers] = React.useState<[] | null>(null)

    async function fetchUsers() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const array = await (await response.json())
        setUsers(array)
    }

    React.useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div className="container">
            <div className="sort">
                <div className="sort__title">Сортировка</div>
                <button className="button">по городу</button>
                <button className="button">по компании</button>
            </div>
            <div className="user-list">
                <div className="user-list__content">
                    <div className="user-list__title">Список пользователей</div>
                    <div className="user-list__list">
                        {users?.map((item: any) => {
                            return (
                                <div className="user-list__item" key={item.id}>
                                    <div className="user-list__data">
                                        <div className="user-list__info">
                                            <div className="user-list__field">ФИО:</div>
                                            <div className="user-list__text">{item.name}</div>
                                        </div>
                                        <div className="user-list__info">
                                            <div className="user-list__field">город:</div>
                                            <div className="user-list__text">{item.address.city}</div>
                                        </div>
                                        <div className="user-list__info">
                                            <div className="user-list__field">компания:</div>
                                            <div className="user-list__text">{item.company.name}</div>
                                        </div>
                                    </div>
                                    <div className="user-list__more">
                                        <div className="user-list__link">
                                            Подробнее
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="user-list__quantity">
                        Найдено {users?.length} пользователей
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
