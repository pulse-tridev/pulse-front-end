"use client";

import { useState } from "react";
import Link from "next/link";
import { Form, Formik } from "formik";
import * as yup from "yup";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import PulseLogo from "@core/svg/Logo";
import Illustrations from "../components/Illustrations";
import AppTextField from "@core/components/AppFormComponents/AppTextField";

// import { useJWTAuthActions } from "@/@core/services/auth/jwt-auth/JWTAuthProvider";

const SignInPage = () => {
  const templateName = "Pulse";

  // const { signInUser } = useJWTAuthActions();

  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const handleClickShowPassword = () => setIsPasswordShown((show) => !show);

  const validationSchema = yup.object({
    login: yup.string().required("O usuário é obrigatória"),
    password: yup.string().required("A senha é obrigatória"),
  });

  // const handleSubmit = (values: { login: string; password: string }) => {
  //   signInUser({
  //     login: values.login,
  //     password: values.password,
  //   });
  // };

  return (
    <div className="flex flex-col justify-center items-center min-bs-[100dvh] relative p-6">
      <Card className="flex flex-col sm:is-[450px]">
        <CardContent className="p-6 sm:!p-12">
          <Link href="/" className="flex justify-center items-center mbe-6">
            <PulseLogo />
          </Link>
          <div className="flex flex-col gap-5">
            <div>
              <Typography variant="h4">{`Bem vindo ao ${templateName}!👋🏻`}</Typography>
              <Typography className="mbs-1">
                Por favor, faça login na sua conta e ajude alguém que precisa de
                você!
              </Typography>
            </div>
            <Formik
              initialValues={{
                login: "",
                password: "",
              }}
              validationSchema={validationSchema}
              // onSubmit={handleSubmit}
              onSubmit={() => {
                console.log("submit");
              }}
            >
              {({ values, handleChange, handleBlur, touched, errors }) => (
                <Form
                  noValidate
                  autoComplete="off"
                  className="flex flex-col gap-5"
                >
                  <div>
                    <AppTextField
                      autoFocus
                      fullWidth
                      label="Usuário"
                      name="login"
                      value={values.login}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.login && Boolean(errors.login)}
                      helperText={touched.login && errors.login}
                    />
                  </div>

                  <div>
                    <AppTextField
                      fullWidth
                      label="Senha"
                      name="password"
                      type={isPasswordShown ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.password && Boolean(errors.password)}
                      helperText={touched.password && errors.password}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              size="small"
                              edge="end"
                              onClick={handleClickShowPassword}
                              onMouseDown={(e) => e.preventDefault()}
                            >
                              <i
                                className={
                                  isPasswordShown
                                    ? "ri-eye-off-line"
                                    : "ri-eye-line"
                                }
                              />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>

                  {/* <div className='flex justify-between items-center gap-x-3 gap-y-1 flex-wrap'>
                    <FormControlLabel control={<Checkbox />} label='Remember me' />
                    <Typography className='text-end' color='primary' component={Link} href='/forgot-password'>
                      Forgot password?
                    </Typography>
                  </div> */}

                  <Button fullWidth variant="contained" type="submit">
                    Entrar
                  </Button>

                  {/* <div className='flex justify-center items-center flex-wrap gap-2'>
                    <Typography>New on our platform?</Typography>
                    <Typography component={Link} href='/register' color='primary'>
                      Create an account
                    </Typography>
                  </div> */}

                  {/* <Divider className='gap-3'>or</Divider>
                  <div className='flex justify-center items-center gap-2'>
                    <IconButton size='small' className='text-facebook'>
                      <i className='ri-facebook-fill' />
                    </IconButton>
                    <IconButton size='small' className='text-twitter'>
                      <i className='ri-twitter-fill' />
                    </IconButton>
                    <IconButton size='small' className='text-github'>
                      <i className='ri-github-fill' />
                    </IconButton>
                    <IconButton size='small' className='text-googlePlus'>
                      <i className='ri-google-fill' />
                    </IconButton>
                  </div> */}
                </Form>
              )}
            </Formik>
          </div>
        </CardContent>
      </Card>
      <Illustrations />
    </div>
  );
};

export default SignInPage;
