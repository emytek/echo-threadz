import { Avatar, Box, Button, Divider, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import Actions from "../components/Actions";
import { useEffect } from "react";
// import Comment from "../components/Comment";
// import useGetUserProfile from "../hooks/useGetUserProfile";
// import useShowToast from "../hooks/useShowToast";
// import { useNavigate, useParams } from "react-router-dom";
// import { formatDistanceToNow } from "date-fns";
// import { useRecoilState, useRecoilValue } from "recoil";
// import userAtom from "../atoms/userAtom";
import { DeleteIcon } from "@chakra-ui/icons";
import Comment from "../components/Comment";
// import postsAtom from "../atoms/postsAtom";

const PostPage = () => {
  return (
    <>
      <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
          <Avatar 
        //   src={user.profilePic} 
          src="/profile.jfif" 
          size={"md"} 
          name="Mark Zuckerberg" 
          />
          <Flex>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              {/* {user.username} */}
              username
            </Text>
            <Image src="/verified.png" w="4" h={4} ml={4} />
          </Flex>
        </Flex>
        <Flex gap={4} alignItems={"center"}>
          <Text
            fontSize={"xs"}
            width={36}
            textAlign={"right"}
            color={"gray.light"}
          >
            {/* {formatDistanceToNow(new Date(currentPost.createdAt))}  */}
            ago
          </Text>

          {/* {currentUser?._id === user._id && ( */}
            <DeleteIcon
              size={20}
              cursor={"pointer"}
            //   onClick={handleDeletePost}
            />
          {/* )} */}
        </Flex>
      </Flex>

      <Text my={3}>
        {/* {currentPost.text} */}
        text
      </Text>

      {/* {currentPost.img && ( */}
        <Box
          borderRadius={6}
          overflow={"hidden"}
          border={"1px solid"}
          borderColor={"gray.light"}
        >
          <Image 
        //   src={currentPost.img} 
          src="/boss.jfif" 
          w={"full"} />
        </Box>
      {/* )} */}

      <Flex gap={3} my={3}>
        <Actions 
        // post={currentPost} 
        />
      </Flex>

      <Divider my={4} />

      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2xl"}>👋</Text>
          <Text color={"gray.light"}>Get the app to like, reply and post.</Text>
        </Flex>
        <Button>Get</Button>
      </Flex>

      <Divider my={4} />
      {/* {currentPost.replies.map((reply) => ( */}
      Comment component
        {/* <Comment
          key={reply._id}
          reply={reply}
          lastReply={
            reply._id ===
            currentPost.replies[currentPost.replies.length - 1]._id
          }
        /> */}
        <Comment 
        comment="Looks really good!"
        createdAt="2d"
        likes={100}
        username="John Smith"
        userAvatar="/profile.jfif"
        />
        <Comment 
        comment="Cool design!"
        createdAt="3d"
        likes={200}
        username="Jack Doe"
        userAvatar="/profile.jfif"
        />
        <Comment 
        comment="Nice template!"
        createdAt="4d"
        likes={300}
        username="Jane Doe"
        userAvatar="/profile.jfif"
        />
      {/* ))} */}
    </>
  );
};

export default PostPage;
