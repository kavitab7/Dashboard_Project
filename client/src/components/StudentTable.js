import React from 'react'
import { DataGrid, GridToolbar, } from '@mui/x-data-grid';
import { userRows } from './userData';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import '../styles/studentTable.css';
const StudentTable = () => {
    const navigate = useNavigate()
    const studentColumns = [
        { field: "id", headerName: "ID", width: 50 },
        {
            field: "img",
            headerName: "Avatar",
            width: 100,
            renderCell: (row) => {
                return <img className='table-img' src={row.row.img} alt="Avatar" />;
            },

        },
        {
            field: "firstName",
            type: "string",
            headerName: "First name",
            width: 130,
        },
        {
            field: "lastName",
            type: "string",
            headerName: "Last name",
            width: 130,
        },
        {
            field: "email",
            type: "string",
            headerName: "Email",
            width: 200,
        },
        {
            field: "courseTaken",
            type: "string",
            headerName: "CourseTaken",
            width: 130,
        },
        {
            field: "createdAt",
            headerName: "Created At",
            width: 120,
            type: "string",
        },
        {
            field: "verified",
            headerName: "Verified",
            width: 120,
            type: "boolean",
        },
        {
            field: "actions",
            headerName: "Actions",
            width: 150,
            renderCell: (params) => {
                return (
                    <Button variant="outlined" onClick={() => handleView(params.row.id)}>View</Button>
                );
            },
        },
    ];
    const handleView = (userId) => {
        navigate(`/student/${userId}`);
    };



    return (
        <div className="dataTable">
            <DataGrid
                className="dataGrid"
                rows={userRows}
                columns={studentColumns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 9,
                        },
                    },
                }}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnFilter
                disableDensitySelector
                disableColumnSelector
            />
        </div>
    )
}

export default StudentTable