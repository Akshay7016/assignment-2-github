import React from 'react'
import { useQuery } from 'react-query';
import axios from 'axios';
import { BsFillPencilFill } from 'react-icons/bs'
import { FaLaptopCode } from "react-icons/fa"
import { MdDescription } from "react-icons/md"
import { Box, Text, Link } from 'rebass';

const Repos = ({ repos_url, username, repo_count }) => {

    const { data } = useQuery(repos_url, async () => await axios.get(repos_url));

    return (
        <>
            {/* main box for Repositories */}
            <Box
                sx={{
                    float: "left",
                    width: "500px",
                    height: "100%",
                    padding: "5px",
                    marginLeft: "15px",
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: '#F0F0F0',
                    borderRadius: "5px",
                    boxShadow: "1px 1px 5px #808080"
                }}>

                {/* Box for "Repositories" heading */}
                <Box
                    sx={{
                        width: "100%",
                        height: "40px",
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderColor: '#A8A8A8',
                        borderRadius: "5px",
                        backgroundColor: "#ADD8E6",
                    }}>
                    <Text
                        sx={{
                            padding: "3px 10px",
                            color: "black",
                            fontWeight: "600",
                            fontSize: "20px",
                        }}>
                        Repositories ({repo_count})
                    </Text>
                </Box>

                {/* Box to show all Repositories */}
                <Box
                    sx={{
                        width: "100%",
                        height: "453px",
                        marginTop: "5px",
                        overflowY: "auto",

                        "::-webkit-scrollbar": {
                            width: "0px",
                        },
                    }}>

                    {/* Box to show single repositories */}
                    {
                        data?.data.map((repo) => {
                            return (
                                <Box key={repo.id}
                                    sx={{
                                        width: "100%",
                                        padding: "5px",
                                        borderWidth: '1px',
                                        borderStyle: 'solid',
                                        borderColor: '#A8A8A8',
                                        borderRadius: "5px",
                                        backgroundColor: "#ffefd5",
                                        marginBottom: "5px",

                                        ":last-child": {
                                            marginBottom: "0",
                                        }
                                    }}>

                                    {/* Repository name */}
                                    <Link href={`https://github.com/${username}/${repo.name}`} target="_blank"
                                        sx={{
                                            textDecoration: "none",
                                        }}>
                                        <Text
                                            sx={{
                                                fontWeight: "600",
                                                fontSize: "15px",
                                                color: "blue"
                                            }}>
                                            <BsFillPencilFill /> {repo.name}
                                        </Text>
                                    </Link>

                                    {/* Repository languages */}
                                    <Text
                                        sx={{
                                            marginTop: "5px",
                                            fontSize: "15px",
                                            color: "black"
                                        }}>
                                        <FaLaptopCode /> {repo.language}
                                    </Text>

                                    {/* Repository description */}
                                    <Text
                                        sx={{
                                            fontSize: "15px",
                                            color: "black"
                                        }}>
                                        <MdDescription /> {repo.description}
                                    </Text>
                                </Box>
                            )
                        })
                    }
                </Box>
            </Box>
        </>
    )
}

export default Repos;