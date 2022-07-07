import React from 'react'
import axios from 'axios';
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { Box, Button, Flex, Text } from 'rebass'
import { Input } from '@rebass/forms'

import UserCard from './UserCard'
import Repos from './Repos';
import Followers from './Followers';

const schema = yup.object().shape({
    username: yup.string().required("Username is required!")
})

const UserInput = () => {
    const { register, handleSubmit, reset, getValues, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const { data, refetch, isError } = useQuery(
        "user",
        async () => await axios.get(`https://api.github.com/users/${getValues("username")}`),
        {
            enabled: false,
        })

    const fetchDetails = () => {
        refetch()

        reset({
            username: ""
        })
    }

    return (
        <>
            {/* Box for taking user's input */}
            <Box sx={{
                width: "500px",
                margin: "auto",
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: '#F0F0F0',
                borderRadius: "5px",
                boxShadow: "1px 1px 5px #808080"
            }}>
                <Flex display="flex">
                    <Box
                        sx={{
                            width: "350px",
                            margin: "8px"
                        }}>
                        <Input
                            type='text'
                            name='username'
                            placeholder='Enter username'
                            {...register("username")}
                        />
                    </Box>

                    <Box
                        sx={{
                            margin: "8px 8px 8px 0px",
                        }}>
                        <Button
                            sx={{
                                width: "125px",
                                backgroundColor: "#3457D5",
                                ':hover': {
                                    backgroundColor: '#2a52be',
                                }
                            }}
                            onClick={handleSubmit(fetchDetails)}>
                            Fetch User
                        </Button>
                    </Box>
                </Flex>
            </Box>

            {/* If username is empty then show error message */}
            {errors.username?.message ?
                <Text
                    sx={{
                        marginTop: "5px",
                        marginLeft: "470px",
                        color: "red",
                        fontWeight: "500",
                        fontSize: "15px",
                    }}>
                    {errors.username?.message}
                </Text> :
                null
            }

            {/* If user not found then show error message */}
            {isError ?
                <Text
                    sx={{
                        marginTop: "5px",
                        marginLeft: "470px",
                        color: "red",
                        fontWeight: "500",
                        fontSize: "15px",
                    }}>
                    User not found!!!!
                </Text> :
                null
            }

            {/* Box to display UserCard, Repos and Followers component */}
            <Box
                sx={{
                    marginTop: "20px",
                    height: "510px"
                }}>

                {/* If we get user then show UserCard */}
                {data?.data ? <UserCard user={data?.data} /> : null}

                {/* If we get user then show Repos component && user object has repos_url property which contains repository url*/}
                {data?.data ? <Repos repos_url={data?.data?.repos_url} username={data?.data?.login} repo_count={data?.data?.public_repos} /> : null}

                {/* If we get user then show Followers component && user object has followers_url property which contains followers url*/}
                {data?.data ? <Followers followers_url={data?.data?.followers_url} follower_count={data?.data?.followers} /> : null}

            </Box>

        </>
    )
}

export default UserInput;