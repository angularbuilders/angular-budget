(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"ct+p":function(e,b,t){"use strict";t.r(b),t.d(b,"HomeModule",(function(){return J}));var n=t("ofXK"),s=t("tyNb"),c=t("EdCj"),o=t("GbAS"),r=t("Wfmo"),i=t("2FCU"),a=t("fXoL");function d(e,b){1&e&&(a.Kb(0,"sup"),a.dc(1,"*"),a.Jb())}function p(e,b){1&e&&(a.Kb(0,"sup"),a.dc(1,"*"),a.Jb())}const u=function(e){return["projects",e]};function f(e,b){if(1&e&&(a.Kb(0,"aside"),a.Kb(1,"h3"),a.Kb(2,"a",1),a.dc(3),a.Jb(),a.Jb(),a.Kb(4,"p"),a.Kb(5,"i"),a.dc(6),a.Tb(7,"date"),a.Tb(8,"date"),a.Jb(),a.Jb(),a.Kb(9,"p"),a.dc(10,"Presupuesto: "),a.Kb(11,"b"),a.dc(12),a.Tb(13,"number"),a.Jb(),a.Jb(),a.Kb(14,"p"),a.dc(15,"Gastos: "),a.Kb(16,"b"),a.dc(17),a.Tb(18,"number"),a.Jb(),a.Jb(),a.Kb(19,"p"),a.dc(20,"Ingresos: "),a.Kb(21,"b"),a.dc(22),a.Tb(23,"number"),a.Jb(),a.Jb(),a.Kb(24,"p"),a.dc(25,"Beneficio: "),a.Kb(26,"b"),a.dc(27),a.Tb(28,"number"),a.Jb(),a.cc(29,d,2,0,"sup",2),a.Jb(),a.Kb(30,"p"),a.dc(31," Saldo: "),a.Kb(32,"b"),a.dc(33),a.Tb(34,"number"),a.Jb(),a.cc(35,p,2,0,"sup",2),a.Jb(),a.Jb()),2&e){const e=b.$implicit;a.xb(2),a.Wb("routerLink",a.Xb(27,u,e.id)),a.xb(1),a.ec(e.title),a.xb(3),a.gc(" ",a.Vb(7,11,e.start,"dd/MM/yyyy")," - ",a.Vb(8,14,e.end,"dd/MM/yyyy")," "),a.xb(6),a.fc("",a.Ub(13,17,e.budget)," \u20ac"),a.xb(5),a.fc(" ",a.Ub(18,19,e.totalExpenses)," \u20ac"),a.xb(5),a.fc(" ",a.Ub(23,21,e.totalIncomes)," \u20ac"),a.xb(5),a.fc(" ",a.Ub(28,23,e.profit)," \u20ac"),a.xb(2),a.Wb("ngIf",e.profit<0),a.xb(4),a.fc(" ",a.Ub(34,25,e.balance)," \u20ac"),a.xb(2),a.Wb("ngIf",e.balance<0)}}const l=[{path:"",component:(()=>{class e{constructor(){this.projectViews=[]}ngOnInit(){this.setProjectsView(),this.setTasksView()}setProjectsView(){this.projectViews=c.a.map((e=>{const b=Object.assign({},e),t=r.a.filter((e=>e.projectId===b.id)),n=t.filter((e=>e.type===i.a.Expense));b.totalExpenses=n.length>0?n.map((e=>e.amount)).reduce(((e,b)=>e+b)):0;const s=t.filter((e=>e.type===i.a.Incoming));return b.totalIncomes=s.length>0?s.map((e=>e.amount)).reduce(((e,b)=>e+b)):0,b.profit=b.totalIncomes-b.totalExpenses,b.balance=b.budget+b.profit,b}))}setTasksView(){this.tasksViews={total:o.a.length,pending:o.a.filter((e=>!e.done)).length}}}return e.\u0275fac=function(b){return new(b||e)},e.\u0275cmp=a.Bb({type:e,selectors:[["ab-home"]],decls:21,vars:7,consts:[[4,"ngFor","ngForOf"],[3,"routerLink"],[4,"ngIf"]],template:function(e,b){1&e&&(a.Kb(0,"section"),a.Kb(1,"header"),a.Kb(2,"h2"),a.dc(3," Estado general de mis proyectos y tareas "),a.Jb(),a.Jb(),a.cc(4,f,36,29,"aside",0),a.Kb(5,"aside"),a.Kb(6,"h3"),a.dc(7,"Tareas"),a.Jb(),a.Kb(8,"p"),a.dc(9,"Completadas: "),a.Kb(10,"mark"),a.Kb(11,"b"),a.dc(12),a.Tb(13,"number"),a.Jb(),a.Jb(),a.Jb(),a.Kb(14,"p"),a.dc(15,"Pendientes: "),a.Kb(16,"b"),a.dc(17),a.Tb(18,"number"),a.Jb(),a.Kb(19,"sup"),a.dc(20,"!"),a.Jb(),a.Jb(),a.Jb(),a.Jb()),2&e&&(a.xb(4),a.Wb("ngForOf",b.projectViews),a.xb(8),a.ec(a.Ub(13,3,b.tasksViews.total-b.tasksViews.pending)),a.xb(5),a.fc(" ",a.Ub(18,5,b.tasksViews.pending)," "))},directives:[n.j,s.d,n.k],pipes:[n.e,n.d],styles:[""]}),e})()}];let m=(()=>{class e{}return e.\u0275mod=a.Fb({type:e}),e.\u0275inj=a.Eb({factory:function(b){return new(b||e)},imports:[[s.e.forChild(l)],s.e]}),e})(),J=(()=>{class e{}return e.\u0275mod=a.Fb({type:e}),e.\u0275inj=a.Eb({factory:function(b){return new(b||e)},imports:[[n.b,m]]}),e})()}}]);