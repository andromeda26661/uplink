﻿namespace Uplink.Capability.Core
{
    public class Save : Capability
    {
        public bool SaveToFile;

        public Save()
        {
            StringType = "Save";
            Program.Systems.Register(this);
        }

        public override void Update()
        {/*
            Environment.Exit(0);
            if (SaveToFile)
            {
                //SaveToFile = false;
                //SaveUniverseToFile(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData) + @"\Uplink\");
                Environment.Exit(0);
            }*/
        }
    }
}