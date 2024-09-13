import { useState } from "react";
import { Avatar, Divider, Flex, Text } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "./Actions";

const Comment = ({ userAvatar, createdAt, 
    comment, username, likes}) => {
    const [liked, setLiked] = useState(false)

	return (
		<>
			{/* <Flex gap={4} py={2} my={2} w={"full"}>
				<Avatar src={reply.userProfilePic} size={"sm"} />
				<Flex gap={1} w={"full"} flexDirection={"column"}>
					<Flex w={"full"} justifyContent={"space-between"} alignItems={"center"}>
						<Text fontSize='sm' fontWeight='bold'>
							{reply.username}
						</Text>
					</Flex>
					<Text>{reply.text}</Text>
				</Flex>
			</Flex> */}
			{/* {!lastReply ? <Divider /> : null} */}

            <Flex gap={4} py={2} my={2} w={"full"}>
				<Avatar src={ userAvatar } size={"sm"} />
				<Flex gap={1} w={"full"} flexDirection={"column"}>
					<Flex w={"full"} justifyContent={"space-between"} alignItems={"center"}>
						<Text fontSize='sm' fontWeight='bold'>
							{/* {reply.username} */}
                            {username}
						</Text>
                        <Flex>
                            <Text fontSize={'sm'} color='gray.light'>{createdAt}</Text>
                            <BsThreeDots />
                        </Flex>
					</Flex>
					{/* <Text>{reply.text}</Text> */}
					<Text>{comment}</Text>
                    <Actions 
                        liked={liked}
                        setLiked={setLiked}
                    />
                     <Text fontSize={'sm'} color='gray.light'>
                        { 100 + (liked ? 1 : 0) } likes
                    </Text>
				</Flex>
			</Flex>
		</>
	);
};

export default Comment;
