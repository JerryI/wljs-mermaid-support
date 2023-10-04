BeginPackage["JerryI`WolframJSFrontend`MermaidSupport`"];


Begin["`Private`"];


MermaidQ[___] := False


MermaidQ[cellText_String] := StringMatchQ[cellText, StartOfString ~~ ".mermaid"];


MermaidProcessor[expr_String, signature_String, callback_] := Module[{str = StringDrop[expr, StringLength[First[StringSplit[expr, "\n"]]] ]},
  Print["MermaidProcessor!"];
  callback[
      str,
      CreateUUID[], 
      "mermaid",
      Null
  ];
];


JerryI`WolframJSFrontend`Notebook`NotebookAddEvaluator[
  MermaidQ -> <|
    "SyntaxChecker"->(True&), 
    "Epilog"->(#&), 
    "Prolog"->(#&), 
    "Evaluator"->MermaidProcessor
  |>, 
  "HighestPriority"
];


End[];


EndPackage[];
