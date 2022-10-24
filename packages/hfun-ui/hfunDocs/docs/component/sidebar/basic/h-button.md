# HButton 按钮
常用操作按钮

## 基础用法

基础的函数用法,使用`size`、`color`、`pain`、`round`属性来定义 Button 的样式。

<div style="margin-bottom:20px;">
  <HButton color="blue">主要按钮</HButton>
  <HButton color="green">绿色按钮</HButton>
  <HButton color="gray">灰色按钮</HButton>
  <HButton color="yellow">黄色按钮</HButton>
  <HButton color="red">红色按钮</HButton>
 </div>
 <div style="margin-bottom:20px;"
 >
  <HButton color="blue" plain>朴素按钮</HButton>
  <HButton color="green" plain>绿色按钮</HButton>
  <HButton color="gray" plain>灰色按钮</HButton>
  <HButton color="yellow" plain>黄色按钮</HButton>
  <HButton color="red" plain>红色按钮</HButton>
 </div>
 <div style="margin-bottom:20px;">
  <HButton size="small" plain>小按钮</HButton>
  <HButton size="medium" plain>中按钮</HButton>
  <HButton size="large" plain>大按钮</HButton>
 </div>
 <div style="margin-bottom:20px;">
  <HButton color="blue" round plain icon="search">搜索按钮</HButton>
  <HButton color="green" round plain icon="edit">编辑按钮</HButton>
  <HButton color="gray" round plain icon="check">成功按钮</HButton>
  <HButton color="yellow" round plain icon="message">提示按钮</HButton>
  <HButton color="red" round plain icon="delete">删除按钮</HButton>
 </div>
 <div style="margin-bottom:20px;">
  <HButton color="blue" round plain icon="search"></HButton>
  <HButton color="green" round plain icon="edit"></HButton>
  <HButton color="gray" round plain icon="check"></HButton>
  <HButton color="yellow" round plain icon="message"></HButton>
  <HButton color="red" round plain icon="delete"></HButton>
 </div>

::: details 显示代码

```vue
<template>
 <div style="margin-bottom:20px;">
  <HButton color="blue">主要按钮</HButton>
  <HButton color="green">绿色按钮</HButton>
  <HButton color="gray">灰色按钮</HButton>
  <HButton color="yellow">黄色按钮</HButton>
  <HButton color="red">红色按钮</HButton>
 </div>
 <div style="margin-bottom:20px;"
 >
  <HButton color="blue" plain>朴素按钮</HButton>
  <HButton color="green" plain>绿色按钮</HButton>
  <HButton color="gray" plain>灰色按钮</HButton>
  <HButton color="yellow" plain>黄色按钮</HButton>
  <HButton color="red" plain>红色按钮</HButton>
 </div>
 <div style="margin-bottom:20px;">
  <HButton size="small" plain>小按钮</HButton>
  <HButton size="medium" plain>中按钮</HButton>
  <HButton size="large" plain>大按钮</HButton>
 </div>
 <div style="margin-bottom:20px;">
  <HButton color="blue" round plain icon="search">搜索按钮</HButton>
  <HButton color="green" round plain icon="edit">编辑按钮</HButton>
  <HButton color="gray" round plain icon="check">成功按钮</HButton>
  <HButton color="yellow" round plain icon="message">提示按钮</HButton>
  <HButton color="red" round plain icon="delete">删除按钮</HButton>
 </div>
 <div style="margin-bottom:20px;">
  <HButton color="blue" round plain icon="search"></HButton>
  <HButton color="green" round plain icon="edit"></HButton>
  <HButton color="gray" round plain icon="check"></HButton>
  <HButton color="yellow" round plain icon="message"></HButton>
  <HButton color="red" round plain icon="delete"></HButton>
 </div>
</template>
```
:::

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

<div class="flex flex-row">
  <HButton icon="edit" plain></HButton>
  <HButton icon="delete" plain></HButton>
  <HButton icon="share" plain></HButton>
  <HButton round plain icon="search">搜索</HButton>
</div>

::: details 显示代码

```vue
<template>
 <div class="flex flex-row">
  <HButton icon="edit" plain></HButton>
  <HButton icon="delete" plain></HButton>
  <HButton icon="share" plain></HButton>
  <HButton round plain icon="search">搜索</HButton>
 </div>
</template>
```