export const validationMessage =
{

  email:[
    {type:'required',message:'Email is required'},
    {type:'pattern',message:'Enter a valid email'}
  ],
  password:[
    {type:'required',message:'Password is required'},
    {type:'minlength',message:'Please enter minimum 6 character '}
  ],
  oldpassword:[
    {type:'required',message:'Password is required'},
    {type:'minlength',message:'Please enter minimum 6 character '}
  ],
  newpassword:[
    {type:'required',message:'Password is required'},
    {type:'minlength',message:'Please enter minimum 6 character '}
  ],
//   name:[
//     {type:'required',message:'Please enter the required field'},
//     {type:'pattern',message:'Only alphabets are allowed!!'},
//     {type:'length',message:'Name should contain 3 characters'}
//   ],
//   Email:[
//     {type:'required',message:'Please enter the required field'},
//     {type:'pattern',message:'Enter a valid email'}
//   ],
}
