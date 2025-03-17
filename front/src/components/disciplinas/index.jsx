import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css'; // Importa o arquivo de estilos

const Disciplinas = () => {
    const [disciplinas, setDisciplinas] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('token')); // ou de outro local que você armazene o token
    const [up, setUp] = useState(false); // Para atualizar os dados se necessário

    useEffect(() => {
        if (!token) return; // Se não tiver token, não faz a requisição

        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/disciplinas/', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setDisciplinas(response.data);
                console.log('Disciplinas:', response.data);
            } catch (error) {
                console.error('Erro ao buscar disciplinas:', error);
            }
        };

        fetchData();
    }, [token, up]); // Dependências: token e up

    return (
        <div className="disciplinas-container">
            <h1>Disciplinas</h1>
            {disciplinas.length === 0 ? (
                <p>Não há disciplinas cadastradas.</p>
            ) : (
                <table className="disciplinas-table">
                    <thead>
                        <tr>
                            <th>Disciplina</th>
                            <th>Sigla</th>
                            <th>Curso</th>
                            <th>Carga Horária</th>
                            <th>Semestre</th>
                            <th>Professor Responsável</th>
                        </tr>
                    </thead>
                    <tbody>
                        {disciplinas.map((disciplina, index) => (
                            <tr key={index}>
                                <td>{disciplina.disciplinas}</td>
                                <td>{disciplina.sigla}</td>
                                <td>{disciplina.curso}</td>
                                <td>{disciplina.carga_horaria} horas</td>
                                <td>{disciplina.semestre}</td>
                                <td>{disciplina.professor_responsavel}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Disciplinas;
