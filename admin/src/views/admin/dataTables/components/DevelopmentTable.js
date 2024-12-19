'use client';
/* eslint-disable */

import { Box, Flex, Progress, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Input, Textarea, useDisclosure, Alert, AlertIcon } from '@chakra-ui/react';
import { createColumnHelper, flexRender, getCoreRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import Card from 'components/card/Card';
import videoApi from 'services/videoService'; // Import videoApi service
import React, { useEffect, useState } from 'react';

const columnHelper = createColumnHelper();

export default function ComplexTable() {
  const [videoList, setVideoList] = useState([]);
  const [sorting, setSorting] = useState([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [link, setLink] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra UI hooks to manage modal state
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const iconColor = useColorModeValue('secondaryGray.500', 'white');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');

  // Fetch video data when the component mounts
  useEffect(() => {
    const fetchVideoList = async () => {
      try {
        const response = await videoApi.getVideoList();
        setVideoList(response.data.videoList); // Assuming the API response has a 'videoList' field
      } catch (error) {
        console.error('Failed to fetch video list', error);
      }
    };

    fetchVideoList();
  }, []);

  const handleDelete = async (_id) => {
    try {
      // Call delete service
      await videoApi.deleteVideo(_id);
      // Remove the deleted video from the list
      setVideoList((prevList) => prevList.filter((video) => video._id !== _id));
    } catch (error) {
      console.error('Failed to delete video', error);
    }
  };

  const handleAddVideo = async () => {
    // Kiểm tra các trường không được bỏ trống
    if (!title || !desc || !link) {
      setErrorMessage('All fields are required!'); // Hiển thị thông báo lỗi nếu có trường trống
      return;
    }

    try {
      // Thêm một video mới
      const newVideo = { title, desc, html: link };
      await videoApi.addVideo(newVideo);
      // Fetch the updated video list
      const response = await videoApi.getVideoList();
      setVideoList(response.data.videoList);
      onClose(); // Close the modal after saving
      setErrorMessage(''); // Clear any previous error message
    } catch (error) {
      console.error('Failed to add video', error);
    }
  };

  const columns = [
    columnHelper.accessor('title', {
      id: 'title',
      header: () => (
        <Text justifyContent="space-between" align="center" fontSize={{ sm: '10px', lg: '12px' }} color="gray.400">
          TITLE
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="sm" fontWeight="700">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor('desc', {
      id: 'desc',
      header: () => (
        <Text justifyContent="space-between" align="center" fontSize={{ sm: '10px', lg: '12px' }} color="gray.400">
          DESCRIPTION
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="sm" fontWeight="700">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor('html', {
      id: 'html',
      header: () => (
        <Text justifyContent="space-between" align="center" fontSize={{ sm: '10px', lg: '12px' }} color="gray.400">
          LINK
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="sm" fontWeight="700">
          <a href={info.getValue()} target="_blank" rel="noopener noreferrer">Watch Video</a>
        </Text>
      ),
    }),
    columnHelper.accessor('delete', {
      id: 'delete',
      header: () => (
        <Text justifyContent="space-between" align="center" fontSize={{ sm: '10px', lg: '12px' }} color="gray.400">
          DELETE
        </Text>
      ),
      cell: (info) => (
        <Button
          colorScheme="red"
          onClick={() => handleDelete(info.row.original._id)} // Get the id of the video to delete
        >
          Delete
        </Button>
      ),
    }),
  ];

  const table = useReactTable({
    data: videoList,  // Pass the fetched video data to the table
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  return (
    <Card flexDirection="column" w="100%" px="0px" overflowX={{ sm: 'scroll', lg: 'hidden' }}>
      <Flex px="25px" mb="8px" justifyContent="space-between" align="center">
        <Text color={textColor} fontSize="22px" fontWeight="700" lineHeight="100%">
          Video List
        </Text>
        <Button colorScheme="teal" onClick={onOpen}>Add Video</Button> {/* Open modal on button click */}
      </Flex>
      <Box>
        <Table variant="simple" color="gray.500" mb="24px" mt="12px">
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Th
                    key={header.id}
                    colSpan={header.colSpan}
                    pe="10px"
                    borderColor={borderColor}
                    cursor="pointer"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <Flex justifyContent="space-between" align="center" fontSize={{ sm: '10px', lg: '12px' }} color="gray.400">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </Flex>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table
              .getRowModel()
              .rows.slice(0, 11)
              .map((row) => (
                <Tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <Td key={cell.id} fontSize={{ sm: '14px' }} minW={{ sm: '150px', md: '200px', lg: 'auto' }} borderColor="transparent">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </Td>
                  ))}
                </Tr>
              ))}
          </Tbody>
        </Table>
      </Box>

      {/* Modal for adding video */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Video</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Show error message if fields are empty */}
            {errorMessage && (
              <Alert status="error" mb="4">
                <AlertIcon />
                {errorMessage}
              </Alert>
            )}
            <Input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              mb="4"
            />
            <Textarea
              placeholder="Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              mb="4"
            />
            <Input
              placeholder="Video Link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              mb="4"
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleAddVideo}>
              Save
            </Button>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Card>
  );
}
