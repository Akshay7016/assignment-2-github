import React from 'react'
import { useQuery } from 'react-query';
import axios from 'axios';
import { Box, Text, Image, Flex, Link } from 'rebass';

const Followers = ({ followers_url, follower_count }) => {

    const { data } = useQuery(followers_url, async () => await axios.get(followers_url));

    return (
        <>
            {/* Main box for Followers */}
            <Box
                sx={{
                    float: "left",
                    width: "310px",
                    height: "100%",
                    padding: "5px",
                    marginLeft: "15px",
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: '#F0F0F0',
                    boxShadow: "1px 1px 5px #808080",
                    borderRadius: "5px",
                }}>

                {/* Box for "Followers" heading */}
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
                        Followers ({follower_count})
                    </Text>
                </Box>

                {/* Box to show all Followers */}
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

                    {/* Box to show single follower */}
                    {
                        data?.data?.map((follower) => {
                            return (
                                <Box key={follower.id}
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

                                    <Flex display="flex">

                                        {/* Box for profile picture */}
                                        <Box
                                            sx={{
                                                width: "60px",
                                                height: "60px",
                                            }}>
                                            <Image
                                                src={follower.avatar_url}
                                                sx={{
                                                    width: "100%",
                                                    height: "100%",
                                                    borderRadius: "50%",
                                                }}
                                            />
                                        </Box>

                                        {/* Box for name of follower */}
                                        <Box
                                            sx={{
                                                margin: "0px 0px 0px 10px"
                                            }}>
                                            <Link href={`https://github.com/${follower.login}`} target="_blank"
                                                sx={{
                                                    textDecoration: "none",
                                                }}>
                                                <Text
                                                    sx={{
                                                        fontWeight: "600",
                                                        fontSize: "15px",
                                                        color: "blue"
                                                    }}>
                                                    {follower.login}
                                                </Text>
                                            </Link>
                                        </Box>
                                    </Flex>
                                </Box>
                            )
                        })
                    }
                </Box>
            </Box>
        </>
    )
}

export default Followers;