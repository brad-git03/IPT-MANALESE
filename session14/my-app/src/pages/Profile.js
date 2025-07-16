import { useAuth } from '../AuthContext';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function ProfilePage() {

    const { user, setUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/login");
        } else {
            document.title = `${user.fname.toUpperCase()} ${user.lname.toUpperCase()} - Profile`;
        }
    }, [user, navigate]);

    const [showEdit, setShowEdit] = useState(false);
    const [showPasswordModal, setShowPasswordModal] = useState(false);

    const [editProfile, setEditProfile] = useState({
        fname: user.fname,
        mname: user.mname,
        lname: user.lname,
        email: user.email
    });

    const [passwordData, setPasswordData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    });

    const handleUpdateProfile = () => {
        fetch(`http://localhost:4000/users/update/${user.user_id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(editProfile)
        })
            .then(res => res.json())
            .then(data => {
                if (data.code === 1) {
                    const updatedUser = { ...user, ...editProfile };
                    setUser(updatedUser);
                    localStorage.setItem("loginData", JSON.stringify(updatedUser));

                    Swal.fire({
                        icon: 'success',
                        title: 'Updated!',
                        text: data.details
                    });
                    setShowEdit(false);
                    setTimeout(() => {
                        window.location.reload();
                    }, 2500); // Reload after 1 second
                    setPasswordData("");

                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: data.details
                    });
                }
            });
    };

    let [passMessage, setPassMessage] = useState("");
    const { currentPassword, newPassword, confirmPassword } = passwordData;
    useEffect(() => {
        if (currentPassword.length === 0 && newPassword.length === 0) {
            setPassMessage("");
        } else {

            if (newPassword.length >= 1 && newPassword.length <= 7) {
                setPassMessage({
                    message: "Password must be 8 characters long.",
                    css: "fw-bold text-danger"
                });
            } else {

                if (newPassword !== confirmPassword) {
                    setPassMessage({
                        message: "Password do not match",
                        css: "fw-bold text-warning"
                    });
                } else {
                    setPassMessage({
                        message: "Password matched.",
                        css: "fw-bold text-success"
                    });
                }

            }
        }
    }, [newPassword, confirmPassword])

    const handleChangePassword = () => {
        const { currentPassword, newPassword, confirmPassword } = passwordData;

        if (newPassword !== confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Mismatch',
                text: 'New password and confirm password do not match.'
            });
            return;
        }

        fetch(`http://localhost:4000/users/change-password/${user.user_id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ currentPassword, newPassword })
        })
            .then(res => res.json())
            .then(data => {
                if (data.code === 1) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: data.details
                    });
                    setShowPasswordModal(false);
                    setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: data.details
                    });
                }
            });
    };

    return (
        <Container fluid className="min-vh-100 bg-light d-flex align-items-center justify-content-center py-5">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={4} className="text-center mb-4 mb-md-0 border-md-end pe-md-4">
                        <img
                            src={`https://ui-avatars.com/api/?name=${user.fname}+${user.lname}&background=343a40&color=fff&bold=true`}
                            alt="Profile"
                            className="rounded-circle border border-4 border-warning"
                            style={{ width: '160px', height: '160px' }}
                        />
                    </Col>

                    <Col xs={12} md={8} className="ps-md-4">
                        <h2 className="fw-bold mb-2">{user.fname} {user.lname}</h2>
                        <p className="text-muted fs-5 mb-3">{user.email}</p>

                        <hr className="my-4" />

                        <Form>
                            <Form.Group as={Row} className="mb-4">
                                <Form.Label column sm={4} className="text-muted fw-semibold fs-6">
                                    Full Name
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control
                                        plaintext
                                        readOnly
                                        defaultValue={`${user.fname} ${user.mname} ${user.lname}`}
                                        className="fs-5"
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-4">
                                <Form.Label column sm={4} className="text-muted fw-semibold fs-6">
                                    Email
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control plaintext readOnly defaultValue={user.email} className="fs-5" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Form.Label column sm={4} className="text-muted fw-semibold fs-6">
                                    User ID
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control plaintext readOnly defaultValue={user.user_id} className="fs-5" />
                                </Col>
                            </Form.Group>
                        </Form>

                        <Row className="mt-4">
                            <Col xs="auto">
                                <Button
                                    variant="outline-dark"
                                    className="me-2 px-4 py-2"
                                    onClick={() => {
                                        setEditProfile({
                                            fname: user.fname,
                                            mname: user.mname,
                                            lname: user.lname,
                                            email: user.email
                                        });
                                        setShowEdit(true);
                                    }}
                                >
                                    Edit Profile
                                </Button>
                            </Col>
                            <Col xs="auto">
                                <Button
                                    variant="warning"
                                    className="px-4 py-2"
                                    onClick={() => setShowPasswordModal(true)}
                                >
                                    Change Password
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                {/* Edit Profile Modal */}
                <Modal show={showEdit} onHide={() => setShowEdit(false)} centered>
                    <Modal.Header closeButton className="bg-dark text-white">
                        <Modal.Title>Edit Profile</Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={(e) => {
                        e.preventDefault();
                        handleUpdateProfile();
                    }}>
                        <Modal.Body>
                            <Form.Group className="mb-3">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={editProfile.fname}
                                    onChange={(e) => setEditProfile({ ...editProfile, fname: e.target.value })}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Middle Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={editProfile.mname}
                                    onChange={(e) => setEditProfile({ ...editProfile, mname: e.target.value })}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={editProfile.lname}
                                    onChange={(e) => setEditProfile({ ...editProfile, lname: e.target.value })}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={editProfile.email}
                                    onChange={(e) => setEditProfile({ ...editProfile, email: e.target.value })}
                                    required
                                />
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShowEdit(false)}>Cancel</Button>
                            <Button variant="warning" type="submit">Save Changes</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>

                {/* Change Password Modal */}
                <Modal show={showPasswordModal} onHide={() => setShowPasswordModal(false)} centered>
                    <Modal.Header closeButton className="bg-dark text-white">
                        <Modal.Title>Change Password</Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={(e) => {
                        e.preventDefault();
                        handleChangePassword();
                    }}>
                        <Modal.Body>
                            <Form.Group className="mb-3">
                                <Form.Label>Current Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={passwordData.currentPassword}
                                    onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>New Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={passwordData.newPassword}
                                    onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Confirm New Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={passwordData.confirmPassword}
                                    onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                                    required
                                />
                            </Form.Group>
                            <p className={passMessage.css}>{passMessage.message}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShowPasswordModal(false)}>Cancel</Button>
                            <Button variant="warning" type="submit">Update Password</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </Container>
        </Container>
    );
}
