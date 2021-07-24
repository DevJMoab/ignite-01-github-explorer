import { RepositoryItem } from "./RepositoryItem.jsx"

const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}

export function RepositoryList() {
    return <section className="resository-list">
        <h1>Repository List</h1>

        <ul>
           <RepositoryItem repository={repository}/>
           <RepositoryItem repository={repository}/>
           <RepositoryItem repository={repository}/>
           <RepositoryItem repository={repository}/>            
        </ul>

    </section> 

}