import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormItem,
  FormMessage,
  FormDescription,
  FormField,
  FormLabel,
  FormControl,
} from "../components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

  const loginFormSchema = z.object({
    username: z.string().min(3, "Youe username is under 3 characters").max(16, "Youe username is over 16 characters"),
    password: z.string().min(8, "Your password is under 8 characters")
  })

const LoginPage = () => {
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(loginFormSchema),
    reValidateMode: "onSubmit"
  });

  const [isChecked, setIsChecked] = useState(false);

  const handleLogin = (values) => {
    alert(`Username : ${values.username}, Password: ${values.password}`);
  };

  return (
    <main className="px-4  py-8 flex flex-col justify-center items-center max-w-screen h-[80vh]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleLogin)} className="w-full max-w-[540px]">
          <Card>
            <CardHeader>
              <CardTitle>Welcome Back</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> Username </FormLabel>
                      <FormControl> 
                        <Input {...field} />
                        </FormControl>
                        <FormDescription>Username has be between 3 and 16 characters</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
        

          
                  <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> Password </FormLabel>
                      <FormControl> 
                        <Input {...field }  type={isChecked ? "text" : "password"}  />
                        </FormControl>
                         <FormDescription>Password has to 8 characters or more </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

              <div className="flex items-center space-x-2">
                <Checkbox
                  onCheckedChange={(checked) => setIsChecked(checked)}
                  id="show-password"
                />
                <Label htmlFor="show-password">Show Password</Label>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex flex-col space-y-4 w-full">
                <Button type="submit">Login</Button>
                <Button variant="link" className="w-full">
                  Sign Up insitead
                </Button>
              </div>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </main>
  );
};

export default LoginPage;
