import React from 'react'
import { TiLocation } from 'react-icons/ti'
import { HiInformationCircle } from 'react-icons/hi'
import { BsTwitter } from 'react-icons/bs'
import { Box, Image, Text, Link } from 'rebass'

const UserCard = ({ user }) => {
    return (
        <>
            {/* Manin box for userCard */}
            <Box
                sx={{
                    float: "left",
                    width: "310px",
                    height: "100%",
                    padding: "5px",
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: '#F0F0F0',
                    borderRadius: "5px",
                    backgroundColor: "#ffefd5",
                    boxShadow: "1px 1px 5px #808080"
                }}>

                {/* Box to display profile picture of user */}
                <Box
                    sx={{
                        width: "100%",
                        height: "290px",
                    }}>
                    <Link href={`https://github.com/${user.login}`} target="_blank">
                        <Image
                            src={user.avatar_url}
                            sx={{
                                width: "100%",
                                height: "100%",
                                borderRadius: "5px",
                            }}
                        />
                    </Link>
                </Box>

                {/* Box to display name, bio and twitter username */}
                <Box
                    sx={{
                        marginTop: "15px",
                    }}>
                    <Link href={`https://github.com/${user.login}`} target="_blank"
                        sx={{
                            textDecoration: "none",
                        }}>
                        <Text
                            sx={{
                                fontWeight: "bold",
                                textAlign: "center",
                                fontSize: "28px",
                                color: "#324AB2"
                            }}>
                            {user.name}
                        </Text>
                    </Link>

                    <Text
                        sx={{
                            marginTop: "15px",
                            color: "black",
                            textAlign: "center",
                            fontSize: "18px",
                        }}>
                        <TiLocation />  {user.location}
                    </Text>

                    <Text
                        sx={{
                            marginTop: "8px",
                            color: "black",
                            textAlign: "center",
                            fontSize: "18px",
                        }}>
                        <HiInformationCircle />  {user.bio}
                    </Text>

                    <Text
                        sx={{
                            marginTop: "8px",
                            color: "black",
                            textAlign: "center",
                            fontSize: "18px",
                        }}>
                        <BsTwitter />  {user.twitter_username}
                    </Text>
                </Box>

            </Box>
        </>
    )
}

export default UserCard