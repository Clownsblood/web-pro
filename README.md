1. 安装

2. 设置名字和邮箱

   ```git
   git config --global user.name "Your Name"
   git config --global user.email "email@example.com"
   ```

3. 使用mkdir命令创建目录，并进入到目录

   或者可以在想要当作仓库的文件夹内右键选择open git bash here打开git

4. 初始化git版本库

   ```git
   git init
   ```

5. 将文件添加到暂存区

   ```git
   git add 文件名 
   git add *  全选文件
   ```

6. 将暂存区的文件提交到git版本库

   ```git
   git commit -m "提交信息，比如修改了哪些文件"
   ```

7. 查看仓库当前状态

   ```git
   git status
   ```

8. 删除文件 

   ```git
   rm 文件名
   ```

9. 远程仓库

   1. 创建ssh-key

      ```git
      ssh-keygen -t rsa -C "youremail@example.com"
      ```

      创建完成后在我们的C:\Users\Administrator目录下会有一个.ssh的文件夹，里面有`id_rsa`和`id_rsa.pub`两个文件，这两个就是SSH Key的秘钥对，`id_rsa`是私钥，不能泄露出去，`id_rsa.pub`是公钥，可以放心地告诉任何人。

   2. 使用记事本或者其他编辑器打开id_rsa.pub文件，复制里面的全部内容

   3. 登录github，在右上角头像处找到setting

      ![image-20231112145556688](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20231112145556688.png)

      

      然后点击ssh and gpg keys

      ![image-20231112145831630](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20231112145831630.png)

      然后点击new ssh key

      ![image-20231112150025299](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20231112150025299.png)

      然后点击下方的add ssh key即可添加完成

   4. 然后回到git中，连接自己的仓库

      ```
      git remote add origin git@github.com:Clownsblood/web-pro.git
      ```

      把上面的git remote add origin 后面的部分替换成自己的仓库地址就可以了

   5. 推送提交到github的仓库中

      ```
      git push -u origin main
      ```

   6. 回到github的仓库中就可以看到最新提交的了