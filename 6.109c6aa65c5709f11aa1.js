(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"ct+p":function(e,t,s){"use strict";s.r(t),s.d(t,"HomeModule",(function(){return J}));var b=s("ofXK"),c=s("tyNb"),n=s("fXoL"),i=s("cplz"),o=s("nXCA");function a(e,t){1&e&&(n.Kb(0,"sup"),n.ec(1,"*"),n.Jb())}function r(e,t){1&e&&(n.Kb(0,"sup"),n.ec(1,"*"),n.Jb())}const d=function(e){return["projects",e]};function p(e,t){if(1&e&&(n.Kb(0,"aside"),n.Kb(1,"h3"),n.Kb(2,"a",3),n.ec(3),n.Jb(),n.Jb(),n.Kb(4,"p"),n.Kb(5,"i"),n.ec(6),n.Tb(7,"date"),n.Tb(8,"date"),n.Jb(),n.Jb(),n.Kb(9,"p"),n.ec(10,"Presupuesto: "),n.Kb(11,"b"),n.ec(12),n.Tb(13,"number"),n.Jb(),n.Jb(),n.Kb(14,"p"),n.ec(15,"Gastos: "),n.Kb(16,"b"),n.ec(17),n.Tb(18,"number"),n.Jb(),n.Jb(),n.Kb(19,"p"),n.ec(20,"Ingresos: "),n.Kb(21,"b"),n.ec(22),n.Tb(23,"number"),n.Jb(),n.Jb(),n.Kb(24,"p"),n.ec(25,"Beneficio: "),n.Kb(26,"b"),n.ec(27),n.Tb(28,"number"),n.Jb(),n.cc(29,a,2,0,"sup",4),n.Jb(),n.Kb(30,"p"),n.ec(31," Saldo: "),n.Kb(32,"b"),n.ec(33),n.Tb(34,"number"),n.Jb(),n.cc(35,r,2,0,"sup",4),n.Jb(),n.Jb()),2&e){const e=t.$implicit;n.xb(2),n.Wb("routerLink",n.Xb(27,d,e.id)),n.xb(1),n.fc(e.title),n.xb(3),n.hc(" ",n.Vb(7,11,e.start,"dd/MM/yyyy")," - ",n.Vb(8,14,e.end,"dd/MM/yyyy")," "),n.xb(6),n.gc("",n.Ub(13,17,e.budget)," \u20ac"),n.xb(5),n.gc(" ",n.Ub(18,19,e.totalExpenses)," \u20ac"),n.xb(5),n.gc(" ",n.Ub(23,21,e.totalIncomes)," \u20ac"),n.xb(5),n.gc(" ",n.Ub(28,23,e.profit)," \u20ac"),n.xb(2),n.Wb("ngIf",e.profit<0),n.xb(4),n.gc(" ",n.Ub(34,25,e.balance)," \u20ac"),n.xb(2),n.Wb("ngIf",e.balance<0)}}function u(e,t){if(1&e&&(n.Kb(0,"section"),n.Kb(1,"header"),n.Kb(2,"h2"),n.ec(3," Estado general de mis proyectos y tareas "),n.Jb(),n.Jb(),n.cc(4,p,36,29,"aside",2),n.Kb(5,"aside"),n.Kb(6,"h3"),n.ec(7,"Tareas"),n.Jb(),n.Kb(8,"p"),n.ec(9,"Completadas: "),n.Kb(10,"mark"),n.Kb(11,"b"),n.ec(12),n.Tb(13,"number"),n.Jb(),n.Jb(),n.Jb(),n.Kb(14,"p"),n.ec(15,"Pendientes: "),n.Kb(16,"b"),n.ec(17),n.Tb(18,"number"),n.Jb(),n.Kb(19,"sup"),n.ec(20,"!"),n.Jb(),n.Jb(),n.Jb(),n.Jb()),2&e){const e=n.Sb();n.xb(4),n.Wb("ngForOf",e.projectViews),n.xb(8),n.fc(n.Ub(13,3,e.tasksView.total-e.tasksView.pending)),n.xb(5),n.gc(" ",n.Ub(18,5,e.tasksView.pending)," ")}}function h(e,t){1&e&&(n.Kb(0,"section"),n.Kb(1,"blockquote"),n.ec(2,"Esperando datos..."),n.Jb(),n.Jb())}const f=[{path:"",component:(()=>{class e{constructor(e,t){this.dataService=e,this.logicService=t,this.projectViews=[],this.loaded=!1,this.onProjectsLoaded={next:e=>{this.projects=e,this.dataService.getTransactions$().subscribe(this.onTransactionsLoaded)}},this.onTransactionsLoaded={next:e=>{this.transactions=e,this.dataService.getTasks$().subscribe(this.onTasksLoaded)}},this.onTasksLoaded={next:e=>{this.tasks=e,this.setDataViews()}}}ngOnInit(){this.loadData()}loadData(){this.dataService.getProjects$().subscribe(this.onProjectsLoaded)}setDataViews(){this.setProjectViews(),this.setTasksView(),this.loaded=!0}setProjectViews(){this.projectViews=this.logicService.composeProjectViews(this.projects,this.transactions)}setTasksView(){this.tasksView=this.logicService.composeTasksView(this.tasks)}}return e.\u0275fac=function(t){return new(t||e)(n.Hb(i.a),n.Hb(o.a))},e.\u0275cmp=n.Bb({type:e,selectors:[["ab-home"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["noDataYet",""],[4,"ngFor","ngForOf"],[3,"routerLink"],[4,"ngIf"]],template:function(e,t){if(1&e&&(n.cc(0,u,21,7,"section",0),n.cc(1,h,3,0,"ng-template",null,1,n.dc)),2&e){const e=n.Zb(2);n.Wb("ngIf",t.loaded)("ngIfElse",e)}},directives:[b.k,b.j,c.d],pipes:[b.e,b.d],styles:[""]}),e})()}];let l=(()=>{class e{}return e.\u0275mod=n.Fb({type:e}),e.\u0275inj=n.Eb({factory:function(t){return new(t||e)},imports:[[c.e.forChild(f)],c.e]}),e})(),J=(()=>{class e{}return e.\u0275mod=n.Fb({type:e}),e.\u0275inj=n.Eb({factory:function(t){return new(t||e)},imports:[[b.b,l]]}),e})()}}]);