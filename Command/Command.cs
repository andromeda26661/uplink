﻿namespace Uplink.Command
{
    public abstract class Command : Type.Type
    {
        public Type.Result Data;

        public Command()
        {
            Data = new Type.Result();
            StringType = "Command";
        }

        public void Execute()
        {
            if (this.GetType() != typeof(Log))
            {
                if (this.GetType() != typeof(GameLoop))
                {
                    Log l = new();
                    l.Message = StringType + " Executed";
                    l.Level = "Debug";
                    l.Execute();
                }
            }
            Exec();
        }

        internal abstract void Exec();

        public abstract void Undo();
    }
}
